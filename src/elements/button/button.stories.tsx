import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from ".";

export default {
  title: "Elements/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Button",
};
