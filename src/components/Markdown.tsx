import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import { useContext, useEffect, useState, createElement } from 'react';

import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import copy from 'copy-to-clipboard';
import { Actions, stateContext } from '../provider/StateProvider';
import rehypeRaw from 'rehype-raw';
import mermaid from 'mermaid';
import clsx from 'clsx';

type MarkdownProps = {
  children: string;
  src?: string;
  disablePadding?: boolean;
  optimisticHeight?: string;
  small?: boolean;
  preview?: boolean;
  center?: boolean;
  fetchFn?: () => Promise<string>;
};

mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
  fontFamily: 'Fira Code',
});

const Mermaid = (props) => {
  useEffect(() => {
    mermaid.contentLoaded();
  }, []);

  return <div className="mermaid">{props.children}</div>;
};
export const Markdown = ({
  children,
  src,
  fetchFn,
  disablePadding,
  optimisticHeight = '0px',
  small = false,
  preview = false,
  center = true,
}: MarkdownProps) => {
  const [markdown, setMarkdown] = useState<string>(children || '');
  const { dispatch } = useContext(stateContext);

  useEffect(() => {
    if (src && !fetchFn) {
      fetch(src)
        .then((response) => response.text())
        .then((text) => {
          setMarkdown(text);
        });
    } else if (fetchFn) {
      fetchFn().then((text) => {
        setMarkdown(text);
      });
    }
  }, [src, fetchFn]);

  const headingRenderer = (props) => {
    const { node, children } = props;
    const text = children[0];
    if (typeof text === 'string') {
      const anchor = (text || '')
        .toLowerCase()
        .replace(/[^\w\s]/g, '') // Remove special characters
        .replace(/\s+/g, '-'); // Replace spaces with hyphens

      if (preview)
        return createElement('b', { id: anchor || undefined }, children);
      return createElement(node.tagName, { id: anchor || undefined }, children);
    }
    if (preview) return createElement('b', {}, children);
    return createElement(node.tagName, {}, children);
  };

  return (
    <div
      className={clsx('markdown', {
        center,
        disablePadding,
        preview,
      })}
      style={{
        minHeight: optimisticHeight,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        alignContent: 'center',
      }}
    >
      <ReactMarkdown
        className={clsx({ 'markdown-small': small })}
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        components={{
          h1: headingRenderer,
          h2: headingRenderer,
          h3: headingRenderer,
          h4: headingRenderer,
          h5: headingRenderer,
          h6: headingRenderer,
          pre: (props) => {
            const language = (
              props?.children?.props?.className || '-bash'
            ).split('-')[1];

            if (language === 'stackoverflow') {
              const url = props?.children?.props?.children;
              const id = url.split('/').at(-2);
              return (
                <Markdown
                  center={false}
                  disablePadding
                  fetchFn={async () => {
                    const res = await fetch(
                      `https://api.stackexchange.com/2.3/answers/${id}?order=desc&sort=activity&site=stackoverflow&filter=!nNPvSNdWme`
                    );

                    const json = await res.json();
                    const answer = json?.items?.[0]?.body;

                    return `${answer}\n<sub>- ${url}</sub>`;
                  }}
                >
                  Loading Stackoverflow answer.
                </Markdown>
              );
            }

            if (language === 'mermaid') {
              return <Mermaid>{props?.children?.[0].props.children}</Mermaid>;
            }

            const child = Array.isArray(props.children)
              ? props.children[0]
              : props.children;

            return (
              <>
                <Box sx={{ width: '100%', display: 'flex' }}>
                  <IconButton
                    sx={{ ml: 'auto', mb: -7, color: 'white' }}
                    onClick={() => {
                      copy(props?.children?.[0].props.children);
                      dispatch({
                        type: Actions.SHOW_MESSAGE,
                        value: 'Copied to clipboard',
                      });
                    }}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </Box>
                <SyntaxHighlighter language={language} style={a11yDark}>
                  {child.props.children}
                </SyntaxHighlighter>
              </>
            );
          },
          a: (props) => {
            return (
              <Link
                to={props.href || ''}
                component={RouterLink}
                sx={{ color: 'info.main' }}
              >
                {props.children}
              </Link>
            );
          },
          blockquote: (args) => {
            return (
              <Box
                sx={{
                  borderLeft: '4px solid',
                  borderColor: 'primary.main',
                }}
              >
                <blockquote {...args} />
              </Box>
            );
          },
          table: (props) => {
            return (
              <Table>
                <TableHead>
                  <TableRow>
                    {props?.children?.[0].props.children[0].props.children?.map(
                      (e) => {
                        return <TableCell>{e}</TableCell>;
                      }
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props?.children?.[1].props.children.map((row) => {
                    return (
                      <TableRow>
                        {row.props.children.map((e) => {
                          return <TableCell>{e}</TableCell>;
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            );
          },
        }}
      >
        {src || fetchFn ? markdown : children}
      </ReactMarkdown>
    </div>
  );
};
