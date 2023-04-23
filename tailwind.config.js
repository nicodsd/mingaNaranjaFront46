/ @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: [
        './src//*.{js,jsx,ts,tsx}'  //esto también es una forma de englobar subdirectorios
    ],
    theme: {
        extend: {
            backgroundImage: {
                'fondo': "url(./src/assets/images/Group3599.png)"
            },
            colors: {
                'transparencia': "#9D9D9D4D"
            }
        }
    },
    
    variants: {},
    plugins: []
}


