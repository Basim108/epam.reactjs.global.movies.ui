import Header from "./Header";

export default {
    title     : 'Movies/Header',
    component : Header,
    parameters: {
        backgrounds: {
            default: 'body'
        }
    }
}

const Template = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args         = {}