import React, { FC, useState } from 'react';
import style from './styles.module.css';

const Form: FC = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
    const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => setPhone(event.target.value);

    return (
        <div className={style.formContainer}>
            <p className={style.formTitle}>
                Cadastre-se e receba até 20% de desconto na próxima compra
            </p>
            <form>
                <label
                    htmlFor="name"
                    className={style.formLabel}
                >Nome</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleChangeName}
                    className={style.formInputs}
                />
                <label
                    htmlFor="email"
                    className={style.formLabel}
                >E-mail</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleChangeEmail}
                    className={style.formInputs}
                />
                <label
                    htmlFor="phone"
                    className={style.formLabel}
                >Telefone</label>
                <input
                    type="phone"
                    id="phone"
                    value={phone}
                    onChange={handleChangePhone}
                    className={style.formInputs} 
                />

                <button type="submit" className={style.formButton}>Cadastrar</button>
            </form>
        </div>
    );
};

export default Form;