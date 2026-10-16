"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent } from "react";

type FormFieldProps = {
  id: string;
  label: string;
  icone: IconDefinition;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: "text" | "email" | "password";
  minLength?: number;
};

export function FormField({
  id,
  label,
  icone,
  value,
  onChange,
  placeholder,
  type = "text",
  minLength,
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-dorper-cream">
        <FontAwesomeIcon icon={icone} className="mr-2" />
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        minLength={minLength}
        required
        className="w-full rounded-lg border-2 border-dorper-cream/30 bg-dorper-cream px-4 py-3 text-dorper-black focus:outline-none focus:ring-2"
      />
    </div>
  );
}
