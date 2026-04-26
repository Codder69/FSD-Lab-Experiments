import { fireEvent, render, screen } from "@testing-library/react";
import Form from "../components/Form";

test("form submits successfully",()=>{

render(<Form/>);

fireEvent.change(
screen.getByPlaceholderText("Enter name"),
{
target:{value:"Meet"}
}
);

fireEvent.click(
screen.getByText("Submit")
);

expect(
screen.getByText("Form submitted successfully")
).toBeInTheDocument();

});