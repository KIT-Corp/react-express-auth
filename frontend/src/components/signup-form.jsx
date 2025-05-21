// /** @format */

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "@/adapters/auth-adapter";

// export function SignupForm({ className, ...props }) {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     email: "",
//     age: "",
//     zipcode: "",
//     isFoodBank: false,
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { id, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [id]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const zipRegex = /^\d{5}$/;

//     if (!usernameRegex.test(formData.username)) {
//       newErrors.username = "Username must be 3–15 characters and alphanumeric.";
//     }

//     if (!passwordRegex.test(formData.password)) {
//       newErrors.password =
//         "Password must be at least 8 characters, include uppercase, lowercase, number, and special character.";
//     }

//     if (!emailRegex.test(formData.email)) {
//       newErrors.email = "Invalid email format.";
//     }

//     if (formData.zipcode && !zipRegex.test(formData.zipcode)) {
//       newErrors.zipcode = "Zipcode must be a 5-digit number.";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     const [user, error] = await registerUser({
//       username: formData.username,
//       password: formData.password,
//       email: formData.email,
//       is_food_bank: formData.isFoodBank,
//       age: formData.age,
//       zipcode: formData.zipcode,
//     });

//     if (error) {
//       setErrors({ submit: error.message });
//     } else {
//       navigate(`/users/${user.id}`);
//     }
//   };

//   return (
//     <div
//       className={cn("flex flex-col gap-6 justify-center", className)}
//       {...props}
//     >
//       <div className="w-full max-w-4xl">
//         <Card className="overflow-hidden p-0 md:w-[700px]">
//           <CardContent className="grid p-0 grid-cols-1 w-full">
//             <form className="p-6 md:p-8" onSubmit={handleSubmit}>
//               <div className="flex flex-col gap-6">
//                 <div className="flex flex-col items-center text-center">
//                   <h1 className="text-2xl font-bold">Create your account</h1>
//                   <p className="text-muted-foreground text-balance">
//                     Sign up to join Comen Todos!
//                   </p>
//                 </div>
//                 <div className="grid gap-3">
//                   <Label htmlFor="username">Username</Label>
//                   <Input
//                     id="username"
//                     value={formData.username}
//                     onChange={handleChange}
//                     required
//                   />
//                   {errors.username && (
//                     <p className="text-sm text-red-500">{errors.username}</p>
//                   )}
//                 </div>
//                 <div className="grid gap-3">
//                   <Label htmlFor="password">Password</Label>
//                   <Input
//                     id="password"
//                     type="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                   />
//                   {errors.password && (
//                     <p className="text-sm text-red-500">{errors.password}</p>
//                   )}
//                 </div>
//                 <div className="grid gap-3">
//                   <Label htmlFor="email">Email</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                   {errors.email && (
//                     <p className="text-sm text-red-500">{errors.email}</p>
//                   )}
//                 </div>
//                 <div className="grid gap-3">
//                   <Label htmlFor="age">Age (optional)</Label>
//                   <Input
//                     id="age"
//                     type="number"
//                     value={formData.age}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="grid gap-3">
//                   <Label htmlFor="zipcode">Zip Code</Label>
//                   <Input
//                     id="zipcode"
//                     value={formData.zipcode}
//                     onChange={handleChange}
//                   />
//                   {errors.zipcode && (
//                     <p className="text-sm text-red-500">{errors.zipcode}</p>
//                   )}
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Input
//                     id="isFoodBank"
//                     type="checkbox"
//                     checked={formData.isFoodBank}
//                     onChange={handleChange}
//                   />
//                   <Label htmlFor="isFoodBank">I represent a food bank</Label>
//                 </div>
//                 {errors.submit && (
//                   <p className="text-sm text-red-500">{errors.submit}</p>
//                 )}
//                 <Button type="submit" className="w-full">
//                   Create Account
//                 </Button>
//               </div>
//             </form>
//             {/* <div className="bg-muted relative hidden md:block"> */}
//             {/* <img
//                 src="""
//                 alt="Signup"
//                 className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
//               /> */}
//             {/* </div> */}
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

//josh changes//
/** @format */

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "@/adapters/auth-adapter";

export function SignupForm({ className, ...props }) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    age: "",
    zipcode: "",
    isFoodBank: false,
  });
  // const [formData, setFormData] = useState({
  //   username: '',
  //   password: '',
  //   email: '',
  //   age: '',
  //   zipcode: '',
  //   isFoodBank: false,
  // });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };
  // const handleChange = (e) => {
  //   const { id, value, type, checked } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [id]: type === 'checkbox' ? checked : value,
  //   }));
  // };

  const validate = () => {
    const newErrors = {};
    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const zipRegex = /^\d{5}$/;

    if (!usernameRegex.test(formData.username)) {
      newErrors.username = "Username must be 3–15 characters and alphanumeric.";
    if (!usernameRegex.test(props.username)) {
      newErrors.username = 'Username must be 3–15 characters and alphanumeric.';
    }

    if (!passwordRegex.test(props.password)) {
      newErrors.password =
        "Password must be at least 8 characters, include uppercase, lowercase, number, and special character.";
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    if (!emailRegex.test(props.email)) {
      newErrors.email = 'Invalid email format.';
    }

    if (formData.zipcode && !zipRegex.test(formData.zipcode)) {
      newErrors.zipcode = "Zipcode must be a 5-digit number.";
    if (props.zipcode && !zipRegex.test(props.zipcode)) {
      newErrors.zipcode = 'Zipcode must be a 5-digit number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const [user, error] = await registerUser({
      username: props.username,
      password: props.password,
      email: props.email,
      is_food_bank: props.isFoodBank,
      age: props.age,
      zipcode: props.zipcode,
    });

    if (error) {
      setErrors({ submit: error.message });
    } else {
      setCurrentUser(user);
      navigate(`/users/${user.id}`);
    }
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center min-h-screen signup-form-fade",
        className
      )}
      {...props}
    >
      <div className="w-full max-w-4xl">
        <Card className="overflow-hidden p-0 md:w-[700px]">
          <CardContent className="grid p-0 grid-cols-1 w-full">
            <form className="p-6 md:p-8" onSubmit={props.handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Create your account</h1>
                  <p className="text-muted-foreground text-balance">
                    Sign up to join Comen Todos!
                  </p>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    value={props.username}
                    onChange={(e) => props.setUsername(e.target.value)}
                    required
                  />
                  {errors.username && (
                    <p className="text-sm text-red-500">{errors.username}</p>
                  )}
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={props.password}
                    onChange={(e) => props.setPassword(e.target.value)}
                  />
                  {errors.password && (
                    <p className="text-sm text-red-500">{errors.password}</p>
                  )}
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={props.email}
                    onChange={(e) => props.setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="age">Age (optional)</Label>
                  <Input
                    id="age"
                    type="number"
                    value={props.age}
                    onChange={(e) => props.setAge(e.target.value)}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="zipcode">Zip Code</Label>
                  <Input
                    id="zipcode"
                    value={props.zipcode}
                    onChange={(e) => props.setZipcode(e.target.value)}
                  />
                  {errors.zipcode && (
                    <p className="text-sm text-red-500">{errors.zipcode}</p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    id="isFoodBank"
                    type="checkbox"
                    checked={props.isFoodBank}
                    onChange={(e) => props.setIsFoodBank(e.target.checked)}
                  />
                  <Label htmlFor="isFoodBank">I represent a food bank</Label>
                </div>
                {errors.submit && (
                  <p className="text-sm text-red-500">{errors.submit}</p>
                )}
                <Button type="submit" className="w-full">
                  {props.isFoodBank ? 'Next' : 'Create Account'}
                </Button>
              </div>
            </form>
            {/* <div className="bg-muted relative hidden md:block"> */}
            {/* <img
                src="""
                alt="Signup"
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
              /> */}
            {/* </div> */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
