import type { IPersonConfig } from '@/types/storeType'
import { rgba } from '@/utils/color'

export function useElementStyle(element: any, person: IPersonConfig, index: number, patternList: number[], patternColor: string, cardColor: string, cardSize: { width: number, height: number }, textSize: number, mod: 'default' | 'lucky' | 'sphere' = 'default', type: 'add' | 'change' = 'add', textColor: string = '#1a1a1a') {
    // Use light background with consistent opacity for better readability
    if (patternList.includes(index + 1) && mod === 'default') {
        element.style.backgroundColor = rgba(patternColor, 0.15)
    }
    else if (mod === 'sphere' || mod === 'default') {
        // Use higher opacity for light backgrounds to ensure readability
        element.style.backgroundColor = rgba(cardColor, 0.95)
    }
    else if (mod === 'lucky') {
        element.style.backgroundColor = rgba(cardColor, 0.95)
    }
    element.style.border = `1px solid ${rgba(cardColor, 0.3)}`
    element.style.boxShadow = `0 4px 12px ${rgba(cardColor, 0.3)}`
    element.style.width = `${cardSize.width}px`
    element.style.height = `${cardSize.height}px`
    element.style.transition = 'border 0.2s ease'
    if (mod === 'lucky') {
        element.className = 'lucky-element-card'
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

    element.children[1].style.fontSize = `${textSize}px`
    element.children[1].style.lineHeight = `${textSize * 3}px`
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
