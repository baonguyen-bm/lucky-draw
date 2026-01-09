import type { IPersonConfig } from '@/types/storeType'
import { rgba } from '@/utils/color'

export function useElementStyle(element: any, person: IPersonConfig, index: number, patternList: number[], patternColor: string, cardColor: string, cardSize: { width: number, height: number }, textSize: number, mod: 'default' | 'lucky' | 'sphere' = 'default', type: 'add' | 'change' = 'add', textColor: string = '#1a1a1a') {
    // Use light background with consistent opacity for better readability
    if (patternList.includes(index + 1) && mod === 'default') {
        element.style.backgroundColor = rgba(patternColor, 0.15)
    }
    else if (mod === 'sphere') {
        // Glassmorphism effect for sphere cards: semi-transparent with backdrop blur
        element.style.backgroundColor = rgba(cardColor, 0.25)
        element.style.backdropFilter = 'blur(10px) saturate(180%)'
        element.style.webkitBackdropFilter = 'blur(10px) saturate(180%)'
    }
    else if (mod === 'default') {
        // Use higher opacity for light backgrounds to ensure readability
        element.style.backgroundColor = rgba(cardColor, 0.95)
    }
    else if (mod === 'lucky') {
        element.style.backgroundColor = rgba(cardColor, 0.95)
    }
    
    // Border styling - more subtle for sphere mode
    if (mod === 'sphere') {
        element.style.border = `1px solid ${rgba(cardColor, 0.2)}`
        element.style.boxShadow = `0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)`
    } else {
        element.style.border = `1px solid ${rgba(cardColor, 0.3)}`
        element.style.boxShadow = `0 4px 12px ${rgba(cardColor, 0.3)}`
    }
    element.style.width = `${cardSize.width}px`
    element.style.height = `${cardSize.height}px`
    element.style.transition = 'border 0.2s ease, background-color 0.2s ease, backdrop-filter 0.2s ease'
    element.style.borderRadius = '12px'
    element.style.overflow = 'hidden'
    if (mod === 'lucky') {
        element.className = 'lucky-element-card'
    }
    else if (mod === 'sphere') {
        element.className = 'element-card sphere-glass'
    }
    else {
        element.className = 'element-card'
    }
    if (type === 'add') {
        element.addEventListener('mouseenter', (ev: MouseEvent) => {
            const target = ev.target as HTMLElement
            // Only light the border slightly
            target.style.border = `1px solid ${rgba(cardColor, 0.5)}`
        })
        element.addEventListener('mouseleave', (ev: MouseEvent) => {
            const target = ev.target as HTMLElement
            target.style.border = `1px solid ${rgba(cardColor, 0.3)}`
        })
    }
    // Apply text color to all text elements
    element.children[0].style.fontSize = `${textSize * 0.5}px`
    element.children[0].style.color = textColor
    if (person.uid) {
        element.children[0].textContent = person.uid
    }

    // For lucky cards (winners), allow text wrapping and use responsive font size
    if (mod === 'lucky') {
        // Use clamp for responsive font size that adapts to card size
        const baseSize = textSize
        const minSize = Math.max(18, baseSize * 0.6)
        const maxSize = baseSize
        element.children[1].style.fontSize = `clamp(${minSize}px, ${baseSize * 0.8}px, ${maxSize}px)`
        element.children[1].style.lineHeight = '1.4'
        element.children[1].style.whiteSpace = 'normal'
        element.children[1].style.overflow = 'visible'
        element.children[1].style.wordWrap = 'break-word'
        element.children[1].style.wordBreak = 'break-word'
        element.children[1].style.display = '-webkit-box'
        element.children[1].style.webkitLineClamp = '2'
        element.children[1].style.lineClamp = '2' // Standard property
        element.children[1].style.webkitBoxOrient = 'vertical'
        element.children[1].style.padding = '0 10px'
        element.children[1].style.maxHeight = 'none'
        // Vertically center the name in the card
        element.children[1].style.top = '50%'
        element.children[1].style.transform = 'translateY(-50%)'
    } else {
        element.children[1].style.fontSize = `${textSize}px`
        element.children[1].style.lineHeight = `${textSize * 3}px`
        element.children[1].style.whiteSpace = 'nowrap'
        element.children[1].style.overflow = 'hidden'
        element.children[1].style.textOverflow = 'ellipsis'
        // Reset positioning for regular cards
        element.children[1].style.top = '40px'
        element.children[1].style.transform = 'none'
    }
    element.children[1].style.color = textColor
    // Use subtle dark shadow for light backgrounds instead of colored glow
    element.children[1].style.textShadow = '0 1px 2px rgba(0, 0, 0, 0.1)'
    if (person.name) {
        element.children[1].textContent = person.name
    }
    // element.children[2].style.fontSize = `${textSize * 0.5}px`
    // if (person.department || person.identity) {
    //     element.children[2].innerHTML = `${person.department ? person.department : ''}<br/>${person.identity ? person.identity : ''}`
    // }

    element.children[2].style.fontSize = `${textSize * 0.5}px`
    element.children[2].style.color = textColor
    // Set default values for department and identity
    element.children[2].innerHTML = ''
    if (person.department || person.identity) {
        element.children[2].innerHTML = `${person.department ? person.department : ''}<br/>${person.identity ? person.identity : ''}`
    }
    element.children[3].src = person.avatar
    return element
}

/**
 * @description Set the position of the drawn card
 * Minimum one, maximum ten
 */
// TODO: When not exceeding 5: single line arrangement; When exceeding 5, 6: top 3 bottom 3; 7: top 3 bottom 4; 8: top 3 bottom 5; 9: top 4 bottom 5; 10: top 5 bottom 5
export function useElementPosition(element: any, count: number, totalCount: number, cardSize: { width: number, height: number }, windowSize: { width: number, height: number }, cardIndex: number) {
    let xTable = 0
    let yTable = 0
    const centerPosition = {
        x: 0,
        y: windowSize.height / 2 - cardSize.height * 0.9,
    }
    // Special quantities where one row has an even number
    const specialPosition = [2, 4, 7, 9]
    // Excludes special values and cases where the first row in a two-row layout has an odd number of elements
    if (!specialPosition.includes(totalCount) || (totalCount > 5 && cardIndex < 5)) {
        const index = cardIndex % 5
        if (index === 0) {
            xTable = centerPosition.x
            yTable = centerPosition.y - Math.floor(cardIndex / 5) * (cardSize.height + 60)
        }
        else {
            xTable = index % 2 === 0 ? Math.ceil(index / 2) * (cardSize.width + 100) : -Math.ceil(index / 2) * (cardSize.width + 100)
            yTable = centerPosition.y - Math.floor(cardIndex / 5) * (cardSize.height + 60)
        }
    }
    else {
        const index = cardIndex % 5
        if (index === 0) {
            xTable = centerPosition.x + (cardSize.width + 100) / 2
            yTable = centerPosition.y - Math.floor(cardIndex / 5) * (cardSize.height + 60)
        }
        else {
            xTable = index % 2 === 0 ? Math.ceil(index / 2) * (cardSize.width + 100) + (cardSize.width + 100) / 2 : -(Math.ceil(index / 2) * (cardSize.width + 100)) + (cardSize.width + 100) / 2
            yTable = centerPosition.y - Math.floor(cardIndex / 5) * (cardSize.height + 60)
        }
    }
    return { xTable, yTable }
}
