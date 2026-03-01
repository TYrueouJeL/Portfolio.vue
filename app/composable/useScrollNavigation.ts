// composables/useScrollNavigation.ts
export function useScrollNavigation() {
  const sections = ['accueil', 'competences', 'experiences', 'projets', 'contact']
  
  let isScrolling = false
  let lastScrollTime = 0

  function getCurrentSectionIndex(): number {
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight

    let closestIndex = 0
    let closestDistance = Infinity

    sections.forEach((id, index) => {
      const el = document.getElementById(id)
      if (!el) return
      const distance = Math.abs(el.getBoundingClientRect().top)
      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    return closestIndex
  }

  function navigateTo(id: string) {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth' })
  }

  function handleWheel(event: WheelEvent) {
    event.preventDefault()

    const now = Date.now()
    if (isScrolling || now - lastScrollTime < 800) return

    const currentIndex = getCurrentSectionIndex()
    const direction = event.deltaY > 0 ? 1 : -1
    const nextIndex = currentIndex + direction

    if (nextIndex < 0 || nextIndex >= sections.length) return

    const nextSection = sections[nextIndex]
    if (!nextSection) return

    isScrolling = true
    lastScrollTime = now
    navigateTo(nextSection)

    setTimeout(() => {
      isScrolling = false
    }, 800)
  }

  onMounted(() => {
    window.addEventListener('wheel', handleWheel, { passive: false })
  })

  onUnmounted(() => {
    window.removeEventListener('wheel', handleWheel)
  })
}