import React from 'react';
 
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
 
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

var bgColors = { "Dark Blue": "RGB(0, 25, 63)",
                  "Medium Blue": "RGB(0, 50, 150)",
                  "Light Blue": "RGB(1, 94, 234)",
                  "Grey": "RGB(189, 187, 187)",
                  "White": "RGB(255, 255, 255)",
};
 
export default function Help() {
    return (
        <Accordion allowZeroExpanded='true'>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton style={{color: "white", backgroundColor: bgColors["Dark Blue"]}}>
                        Getting Started
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                      This is the placeholder text for the instructions to get started with this application.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton style={{color: "white", backgroundColor: bgColors["Medium Blue"]}}>
                        Camera Basics
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                      This is the placeholder text for all the information about the Camera that you need to know before you get started.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton style={{color: "white", backgroundColor: bgColors["Light Blue"]}}>
                        Using the Camera
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                      This is the placeholder text for the instructions on how to use the Camera that we have implemented.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton style={{backgroundColor: bgColors["Grey"]}}>
                        No label?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                      This is the placeholder text for the instructions that follow if the item you are trying to categorize has no label.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}
