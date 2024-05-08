import * as React from 'react';
import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
} from "@react-email/components";

export const EmailTemplate = ({
    resp,
}) => (
    <Html>
        <Head />
        <Preview>Yelp recent login</Preview>
        <Body style={main}>
            <Container>
                <Section style={logo}>
                    <Img src="D:\sem 6\AWT\FileSharingWebapp\file-sharing-app\public\logo.svg"/>
                </Section>

                <Section style={content}>

                    <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                        <Column>
                            <Heading
                                style={{
                                    fontSize: 32,
                                    fontWeight: "bold",
                                    textAlign: "center",
                                }}
                            >
                                Hi {resp?.emailToSend.split("@")[0]},
                            </Heading>
                            <Heading
                                as="h2"
                                style={{
                                    fontSize: 26,
                                    fontWeight: "bold",
                                    textAlign: "center",
                                }}
                            >
                              Someone Share file With You
                            </Heading>

                            <Text style={paragraph}>
                                <b>File Name: {resp.fileName}</b>
                                
                            </Text>
                            <Text style={{ ...paragraph, marginTop: -5 }}>
                                <b>File Size: {resp.fileSize}</b>
                              
                            </Text>
                            <Text style={{ ...paragraph, marginTop: -5 }}>
                                <b>File Type: {resp.fileType}</b>
                              
                            </Text>
                            <Text
                                style={{
                                    color: "rgb(0,0,0, 0.5)",
                                    fontSize: 14,
                                    marginTop: -5,
                                }}
                            >
                                *Access and Download file on your qwn risk
                            </Text>

                            <Text style={paragraph}>
                                Now you can also share file with File-Sharing-App
                            </Text>
                            <Text style={{ ...paragraph, marginTop: -5 }}>
                                Click Below Button to Access Your File
                            </Text>
                        </Column>
                    </Row>
                    <Row style={{ ...boxInfos, paddingTop: "0" }}>
                        <Column style={containerButton} colSpan={2}>
                            <Button style={button}
                            href={resp?.shortUrl}>Click Here To Download</Button>
                        </Column>
                    </Row>
                </Section>

                <Text
                    style={{
                        textAlign: "center",
                        fontSize: 12,
                        color: "rgb(0,0,0, 0.7)",
                    }}
                >
                    © 2024 | File-Sharing-App @2024 Copyrights
                </Text>
            </Container>
        </Body>
    </Html>
);

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
