import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import CardIndex from '.'

export default {
  title: 'Components/Card Index',
  component: CardIndex
} as ComponentMeta<typeof CardIndex>

const Template: ComponentStory<typeof CardIndex> = (args) => <CardIndex {...args} />;

export const Default = Template.bind({})
Default.args = {
  indecies: [
    {title: 'Index 1', component: <div>Component 1<br /><br /><br /><br /><br /><br /></div>},
    {title: 'Index 2', component: <div>Component 2<br /><br /><br /><br /><br /><br /></div>},
    {title: 'Index 3', component: <div>Component 3<br /><br /><br /><br /><br /><br /></div>},
    {title: 'Index 4', component: <div>Component 4<br /><br /><br /><br /><br /><br /></div>},
    {title: 'Index 5', component: <div>Component 5<br /><br /><br /><br /><br /><br /></div>},
    {title: 'Index 6', component: <div>Component 6<br /><br /><br /><br /><br /><br /></div>},
    {title: 'Index 7', component: <div>Component 7<br /><br /><br /><br /><br /><br /></div>},
  ]
}
