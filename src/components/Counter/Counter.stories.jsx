import Counter from "./Counter"

export default {
    title: 'Movies/Counter',
    component: Counter,
    argTypes: {
        initialValue: {
            type: 'number',
            description: 'the initial value that counter starts from',
            defaultValue: 0
        }
    }
}

const Template = (arg) => <Counter {...arg} />
export const Default = Template.bind({})
Default.args = {
    initialValue: 0
}

export const Initialized = Template.bind({})
Initialized.args = {
    initialValue: 23
}