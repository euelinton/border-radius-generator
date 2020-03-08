// Third Test

const bordersRadius = document.querySelectorAll('.borders')
const preview = document.querySelector('.preview-border')

bordersRadius.forEach(border => {
  border.addEventListener('change', () => {
    preview.style[`${border.id}`] = `${border.value}px`
  
    document.querySelector(`.c-${border.id}`)
      .textContent = `
        ${border.id}:${border.value}px;
      `
  })
})
