export const mountAnimation = `
    0% {
    transform: translateX(120%)
    }
    100%:{
    transform: translateX(0%)
    }
`

export const unmountAnimation = `
    0% { opacity: 1;}
    100% {opacity: 0;
    transform: translateX(120%)
}
`