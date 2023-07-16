import { render, screen} from "@testing-library/react"
import { Application } from './application';

describe('Application test', () => {

    test('renders Correctly', () => {
        render(<Application/ >);

        const pageHeading = screen.getByRole('heading',
        {
            name: 'Job application form'
        });
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole('heading',
        {
            name: 'Section 1'
        });
        expect(sectionHeading).toBeInTheDocument();

        const pageHeadingLevel = screen.getByRole('heading',
        {
            level: 1
        });
        expect(pageHeadingLevel).toBeInTheDocument();

        const sectionHeadingLevel = screen.getByRole('heading',
        {
            level: 2
        });
        expect(sectionHeadingLevel).toBeInTheDocument();


        const name = screen.getByRole('textbox', {
            name:'Name'
        });
        expect(name).toBeInTheDocument();
        
        const bioName = screen.getByRole('textbox', {
            name:'Bio'
        });
        expect(bioName).toBeInTheDocument();
        
        const jobLocationName = screen.getByRole("combobox");
        expect(jobLocationName).toBeInTheDocument();
        
        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();

        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
        
        const nameElement = screen.getByLabelText("Name");
        expect(nameElement).toBeInTheDocument();
        
        const nameElement2 = screen.getByPlaceholderText("Fullname");
        expect(nameElement2).toBeInTheDocument();
        
        const pElement = screen.getByText("All fields are mandatory");
        expect(pElement).toBeInTheDocument();
        
        const newValue = screen.getByDisplayValue("Abhay");
        expect(newValue).toBeInTheDocument();

        const newValueImage = screen.getByAltText("a new cricket");
        expect(newValueImage).toBeInTheDocument();

        const getbyTitle = screen.getByTitle("close");
        expect(getbyTitle).toBeInTheDocument();

        const getbyTestID = screen.getByTestId("custom-id");
        expect(getbyTestID).toBeInTheDocument();


    })




})