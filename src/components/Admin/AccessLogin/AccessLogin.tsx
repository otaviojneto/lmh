import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as S from "./styles";
import {
  IconButton,
  InputAdornment,
  FormControl,
  FormHelperText,
} from "@mui/material";

export type AccessLoginProps = {
  logo: string;
  username?: string;
  password?: string;
  handleSubmit?: (e: React.FormEvent) => void;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorsPassword: boolean;
  errorsUsername: boolean;
};

const AccessLogin: React.FC<AccessLoginProps> = ({
  logo,
  username,
  password,
  errorsPassword,
  errorsUsername,
  handleSubmit,
  handleChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <S.AccessLoginContainer>
      <S.Logo src={logo} alt="logo" />
      <div>
        <S.Title>Bem vindo</S.Title>
        <S.Text>
          Entre com os seus dados nos campos abaixo para fazer login.
        </S.Text>
      </div>
      <S.Form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <S.TextField
            id="outlined-basic"
            label="Usuário"
            name="username"
            variant="outlined"
            required
            placeholder="Digite seu usuário..."
            fullWidth
            onChange={handleChange}
            value={username}
            error={errorsUsername}
          />
          {errorsUsername && <FormHelperText>Usuário inválido</FormHelperText>}
        </FormControl>
        <FormControl fullWidth>
          <S.TextField
            id="outlined-basic"
            label="Senha"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            placeholder="Digite sua senha..."
            fullWidth
            required
            name="password"
            onChange={handleChange}
            value={password}
            error={errorsPassword}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
          {errorsPassword && <FormHelperText>Senha inválida</FormHelperText>}
        </FormControl>
        <S.StyleButton>
          <S.Button
            disableRipple
            size="small"
            variant="contained"
            type="submit"
          >
            Iniciar Sessão
          </S.Button>
        </S.StyleButton>
      </S.Form>
    </S.AccessLoginContainer>
  );
};

export default AccessLogin;
