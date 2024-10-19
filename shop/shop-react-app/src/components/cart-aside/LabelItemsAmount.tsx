import React from "react"

type LabelItemsAmountProps = {
    amount: number
}

const LabelItemsAmount :React.FC<LabelItemsAmountProps> = ({amount}) => {
    return <span className="text-xl underline">Liczba produktów w koszyku: {amount}</span>
}

export default LabelItemsAmount