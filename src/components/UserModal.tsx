import { useState } from "react";
import { ActionButton } from "./ActionButton";

interface User {
  name: string;
  phone: string;
  company: string;
  position: string;
  email?: string;
  level?: string;
  isActive?: boolean;
}

interface UserModalProps {
  user: User;
  onClose: () => void;
}

export default function UserModal({ user, onClose }: UserModalProps) {
  const [userData, setUserData] = useState<User>(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const updatedUsers = users.map((u: User) =>
      u.email === user.email ? userData : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    onClose();
    debugger;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="flex w-10/12 flex-col gap-16 rounded-md bg-white p-6 py-16">
        <h2 className="text-6xl text-center  text-black">Editar usuario</h2>
        <form className="flex flex-col gap-4 text-5xl text-black px-12">
          <label>
            <span className="text-gray-500">Nombre:</span>
            <input
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="block w-full border p-2"
            />
          </label>

          <label className="mt-4">
            <span className="text-gray-500">Teléfono:</span>
            <input
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              className="block w-full border p-2"
            />
          </label>

          <label className="mt-4">
            <span className="text-gray-500">Compañía:</span>
            <input
              name="company"
              value={userData.company}
              onChange={handleChange}
              className="block w-full border p-2"
            />
          </label>

          <label className="mt-4">
            <span className="text-gray-500">Posición:</span>
            <input
              name="position"
              value={userData.position}
              onChange={handleChange}
              className="block w-full border p-2"
            />
          </label>

          <label className="mt-4">
            <span className="text-gray-500">Email:</span>
            <input
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="block w-full border p-2"
            />
          </label>

          <label className="mt-4">
            <span className="text-gray-500">Level:</span>
            <input
              name="level"
              value={userData.level || ""}
              onChange={handleChange}
              className="block w-full border p-2"
            />
          </label>

          <label className="inline-flex items-center cursor-pointer mt-4">
            <input
              type="checkbox"
              checked={userData.isActive || false} 
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, isActive: e.target.checked })) // Update 'isActive' on toggle
              }
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-4 font-medium text-5xl">{ userData.isActive ? "Activo" : "Inactivo"}</span>
          </label>

        </form>
        <div className="flex justify-around gap-12 px-12">
          <ActionButton onClick={onClose} text="Cancelar" size="small" className="btn-alternate border-4 border-orange-500" />
          <ActionButton onClick={handleSave} text="Guardar" size="small" />
        </div>
      </div>
    </div>
  );
}