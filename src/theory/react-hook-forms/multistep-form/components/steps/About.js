import { useAppState } from "../../hooks/use-state-context";
import { useForm } from "react-hook-form";
import {useNavigate, Link} from 'react-router-dom';
import { Button, Field, Form } from "../forms";

const About = () => {

    const [state, setState] = useAppState()
    const {handleSubmit, register} = useForm({defaultValues: state})
    const navigate = useNavigate();

    const saveData = (data) => {
        setState({...state, ...data})
        navigate('/confirm')
    }

    return (
        <Form onSubmit={handleSubmit(saveData)}>
        <fieldset>
          <legend>About</legend>

          <Field label="About me">
            <textarea
              {...register("about")}
              id="about"
              className="form-control"
            />
          </Field>

          <div className="button-row">
            <Link className={`btn btn-secondary`} to="/education">
              {"<"} Previous
            </Link>
            <Button>Next {">"}</Button>
          </div>

        </fieldset>
      </Form>
    );
};

export default About;