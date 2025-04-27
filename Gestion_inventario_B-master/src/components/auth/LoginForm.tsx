import { Alert, Button, Card, CardBody, Form, Input } from "@heroui/react";
import { useEffect, useState } from "react";
import { useAuth, useLogin } from "../../hooks/use-auth";
import { AuthLogin } from "../../models/auth";
import { User } from "../../models/user";

const LoginForm = () => {
  const [action, setAction] = useState("");
  const [loginRequest, setLoginRequest] = useState<AuthLogin | null>(null);
  const { onLoginSuccess } = useAuth();
  const { isLoading, isSuccess, data, error } = useLogin(loginRequest);

  const onLogin = async (request: AuthLogin) => {
    setLoginRequest(null);
    setTimeout(()=>setLoginRequest(request),100)
  };

  useEffect(() => {
    if (isSuccess && data) {
      const newUser = new User(
        data.user.fullName,
        data.user.email,
        data.user.role
      );
      onLoginSuccess(newUser);
    }
  }, [isSuccess, data]);

  return (
    <Card fullWidth={true} className="w-full max-w-md">
      <CardBody>
        <Form
          className="w-full mx-auto flex flex-col items-center gap-4"
          validationBehavior="native"
          onReset={() => setAction("null")}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData.entries());
            onLogin(
              new AuthLogin(data.email as string, data.password as string)
            );
          }}
        >
          <h5 className="text-center w-full ">Iniciar Sesión</h5>
          <Input
            isRequired
            errorMessage="Por favor ingrese un email válido"
            labelPlacement="outside"
            name="email"
            placeholder="Correo"
            type="email"
          />
          <Input
            isRequired
            errorMessage="Por favor ingrese una contraseña válida"
            labelPlacement="outside"
            name="password"
            placeholder="Ingrese su contraseña"
            type="password"
          />
          <Button
            isLoading={isLoading}
            color={isLoading ? "default" : "primary"}
            type="submit"
            className="w-1/2 mt-2 mx-auto bg-gray-900"
            disabled={isLoading}
          >
            {isLoading ? "Cargando..." : "Acceder"}
          </Button>
          {error && (
            <div className="w-full flex items-center my-3">
              <Alert
                color="danger"
                title={`Ocurrio un error al intentar hacer login, revise sus credenciales`}
              />
            </div>
          )}
        </Form>
      </CardBody>
    </Card>
  );
};

export default LoginForm;
