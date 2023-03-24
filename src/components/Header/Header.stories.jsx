import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    title     : 'Movies/Header',
    component : Header,
    parameters: {
        backgrounds: {
            default: 'body'
        }
    }
}

const Template       = (args) => (
    <div className="container">
        <Header {...args} />
    </div>
)
export const Default = Template.bind({})
Default.args         = {}