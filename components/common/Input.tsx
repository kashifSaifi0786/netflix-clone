'use client'

interface InputProps {
    id: string;
    value: string;
    onChange: (value: string) => void;
    label: string;
    type?: string;
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    value,
    onChange,
    type
}) => {
    return (<div className="relative">
        <input
            id={id}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="
            block
            rounded-md
            px-6
            pt-6
            pb-1
            w-full
            text-white
            bg-neutral-700
            appearance-none
            focus:outline-none
            focus:ring-0
            invalid:border-b
            peer
            "
            placeholder=" "
        />
        <label
            htmlFor="email"
            className="
            absolute
            text-zinc-400
            left-6
            duration-150
            transition
            -translate-y-3
            scale-75
            top-4
            z-10
            origin-[0]
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-3
            "
        >
            {label}
        </label>
    </div>);
}

export default Input;