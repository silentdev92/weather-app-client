const icons = import.meta.glob('../assets/img/main/png/*.png', {
  import: 'default',
  eager: true,
})

export const getWeatherIconUrl = (icon: string) => {
  for (const path in icons) {
    const iconUrl: any = icons[path]
    const iconName = iconUrl.split('/').pop()?.split('.')[0]
    if (iconName === icon) return iconUrl
  }
}
