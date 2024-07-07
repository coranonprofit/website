import { Accordion, AccordionControl, AccordionItem, AccordionPanel, Center, Container, Title } from "@mantine/core";
import content from "./about.json";

export default function AboutPage() {
  return <Container>
    <Center><Title my="xl">About / FAQ</Title></Center>

    <Accordion>
      {content.map(({label, content}) => <AccordionItem key={label} value={label}>
        <AccordionControl>{label}</AccordionControl>
        <AccordionPanel>{content}</AccordionPanel>
      </AccordionItem>)}
    </Accordion>
  </Container>
}
