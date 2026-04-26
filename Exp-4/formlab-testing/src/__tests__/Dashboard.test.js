import renderer from "react-test-renderer";
import Dashboard from "../components/Dashboard";

test("loading snapshot",()=>{

const tree=renderer
.create(
<Dashboard status="loading"/>
)
.toJSON();

expect(tree).toMatchSnapshot();

});