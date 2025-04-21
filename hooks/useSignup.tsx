import { supabase } from "@/utils/supabase";
import { useState } from "react";
type User = {
  email: string;
  password: string;
  phone: number;
  name: string;
  lastName: string;
};
const useSignup = () => {
  const [newUser, setNewUser] = useState<User>();

  const handleRegister = async (props: User) => {
    const option = {
      email: props.email,
      password: props.password,
      phone: props.phone,
      name: props.name,
    };

    await supabase.auth.signUp(option);
  };
  return { newUser, setNewUser };
};
export default useSignup;
