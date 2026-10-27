import {useForm} from 'react-hook-form'
import {Input} from './Input.jsx'

export function FormWithRHF() {

    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onBlur'});

    const onSubmit =(data) => 
        {
            console.log(data);
        }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input 
                inputRegister={register('username', {required: "Campo obligatorio"})} 
                label="Nombre de usuario: " 
                type="text" 
                errors = {errors.username?.message} />
            <Input
                inputRegister={{...register('password', 
                    {minLength: 
                        {value: 8, message: "La contaseña debe tener mínimo 8 caracteres"}})}}
                label="Contraseña: "
                type="password"
                errors = {errors.password?.message}/>
            <br></br>
            <button type="submit">Iniciar Sesión</button>
        </form>
  );
}
