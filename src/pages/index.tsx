import { Card, CardContent, CardHeader, Container, Paper } from "@mui/material"
import Markdown from "react-markdown"

export const MainPage = () => {
    return <Container maxWidth="sm">
        <Card sx={{pt: '15vh'}}>
            <CardHeader title="Welcome to your very own community." />
            <CardContent>
        <Markdown>{`
Go to [/community](/community) to see the community page.
`}
        </Markdown>
</CardContent>
    </Card>
</Container>
}