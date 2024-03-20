function checkNullish(a: number | undefined | null) {
    const text = a ?? 'su valor es nulo o undefined'
    console.log(text, a )
}
checkNullish(4)
