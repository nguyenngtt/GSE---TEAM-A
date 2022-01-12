import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const SAMPLE_SENTENCES = [
    "As long as the Lakers trash from now on, I could careless. And that's real."
]

export default function DemoForm() {
    const [CheckResult, setCheckResult] = React.useState(null)

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        let opts = {
            'method': 'POST',
            'body': data
        }
        fetch(`https://hateless.herokuapp.com/v1/predict`, opts)
            .then(rs => rs.json())
            .then(rs => {
                setCheckResult(rs)
            })
        // eslint-disable-next-line no-console
    };
    let sent_id = Math.floor(Math.random() * SAMPLE_SENTENCES.length);

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <TextsmsOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Hateless
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextareaAutosize
                        name="message"
                        minRows={4}
                        aria-label="maximum height"
                        placeholder="Sample text to analyze"
                        defaultValue={SAMPLE_SENTENCES[sent_id]}
                        style={{ width: 400 }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Check it
                    </Button>
                    {CheckResult ?
                        <Alert onClose={() => { }}>
                            Offensive: {Number(CheckResult[0] * 100).toFixed(2)}%,&nbsp;
                            Hate: {Number(CheckResult[1] * 100).toFixed(2)}%,&nbsp;
                            Other: {Number(CheckResult[2] * 100).toFixed(2)}%,&nbsp;
                            Sarcasm: {Number(0).toFixed(2)}%,&nbsp;
                            Sexism: {Number(0).toFixed(2)}%
                        </Alert> : ''}
                </Box>
            </Box>
        </Container>
    );
}