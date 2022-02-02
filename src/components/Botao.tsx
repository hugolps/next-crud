interface BotaoProps {
  cor?: 'green' | 'blue' | 'gray'
  className?: string
  children: any
  onClick?: () => void
}


export default function Botao(props: BotaoProps) {


  let cor = DefinirCor()

  function DefinirCor() {
    const corEscolhida = props.cor

    if(corEscolhida === 'green') {
      return 'from-green-400 to-green-700'
    } else if (corEscolhida === 'blue') {
      return 'from-blue-400 to-blue-700'
    } else {
      return 'from-gray-400 to-gray-700'
    }
    }
    
  

  return (
    <button onClick={props.onClick} className={`
      bg-gradient-to-r ${cor}
      text-white px-4 py-2 rounded-md
      ${props.className}
    `}>
      {props.children}
    </button>
  )
};
