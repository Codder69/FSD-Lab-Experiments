import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../components/Button";

test("button click increments count",()=>{

render(<Button/>);

const button=screen.getByText("Click Me");

fireEvent.click(button);

expect(
screen.getByText("Clicked 1 times")
).toBeInTheDocument();

});