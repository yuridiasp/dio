export interface IInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    lefIcon?: React.ReactNode,
    name: string,
    control: any,
    errorMessage?: string
}