# My Dashboard

<p align="center">
<img width="2541" alt="스크린샷 2022-12-26 오후 9 11 21" src="https://user-images.githubusercontent.com/52883505/209548326-b91bfe89-8079-4634-bdc7-cff98a6a3fbd.png">
</p>
<p align="center">
<img width="2547" alt="스크린샷 2022-12-26 오후 9 11 42" src="https://user-images.githubusercontent.com/52883505/209547827-e6e5da42-a8ea-465a-aa73-59f434ecbeaf.png">
</p>
<p align="center">
<img width="436" alt="스크린샷 2022-12-26 오후 9 14 22" src="https://user-images.githubusercontent.com/52883505/209547891-a7770739-bff8-48bd-903d-0177bac356ba.png">
</p>
<p align="center">
<img width="1030" alt="스크린샷 2022-12-26 오후 9 15 10" src="https://user-images.githubusercontent.com/52883505/209548105-758b8e55-e22b-4792-bbed-019c7b5c4378.png">
</p>
<p align="center">
<img width="1029" alt="스크린샷 2022-12-26 오후 9 15 20" src="https://user-images.githubusercontent.com/52883505/209548174-9361d8c1-3b0b-4342-ba7f-19b9fbe02efa.png">
</p>
<p align="center">
<img width="1027" alt="스크린샷 2022-12-26 오후 9 15 28" src="https://user-images.githubusercontent.com/52883505/209548194-77556f99-2c0e-4e11-b55d-cd6afba56701.png">
</p>
<p align="center">
<img width="422" alt="스크린샷 2022-12-26 오후 9 15 42" src="https://user-images.githubusercontent.com/52883505/209548204-6d7f0094-4ad5-42d6-ad5b-4048bf4148fa.png">
</p>
<p align="center">
<img width="367" alt="스크린샷 2022-12-26 오후 9 16 04" src="https://user-images.githubusercontent.com/52883505/209548266-62cc9b3d-af7f-4a01-8276-8d7f59088bba.png">
</p>

## Weekly Clone Coding

Part 8 of [Weekly Clone Coding Challenge](https://github.com/namiein/weekly-clone-coding)

## Project Description

Clone Coding Dashboard

## v1.0.0 (2022.12.05 ~ 2022.12.31)

-   Features
    -   D3.js Graphs
    -   Calendar
-   Components
    -   Card
    -   Menu (w. Web Accessibility)
    -   Tab (w. Web Accessibility)

## v1.0.1 (TO-BE)

## Folder Structure

```
.
├── app
│   └── App.tsx
├── assets
│   └── images
│       └── andriyko-podilnyk-3a1NOxCBY10-unsplash.jpg
├── common
│   ├── Calendar
│   │   ├── CalendarContainer
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── CalendarNavigation
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── CalendarTable
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── CalendarTasks
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   └── index.ts
│   ├── Card
│   │   ├── CardContainer
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── CardHeader
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── CardHeading
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── CardMedia
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── CardSubtitle
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── CardSupportingVisual
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── CardText
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── CardTitle
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   └── index.ts
│   ├── Menu
│   │   ├── MenuButton
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── MenuContext
│   │   │   ├── Context.tsx
│   │   │   ├── Provider.tsx
│   │   │   └── types.ts
│   │   ├── MenuList
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── MenuListItem
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   └── index.ts
│   ├── Tab
│   │   ├── Tab
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── TabContext
│   │   │   ├── Context.tsx
│   │   │   ├── Provider.tsx
│   │   │   └── types.ts
│   │   ├── TabIndicator
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── TabItem
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── TabList
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── TabPanel
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   └── index.ts
│   └── index.ts
├── component
│   ├── Calendar
│   │   └── index.tsx
│   ├── CardList
│   │   └── index.tsx
│   ├── DailyCommits
│   │   └── index.tsx
│   ├── Menu
│   │   └── index.tsx
│   ├── MonthlyCommits
│   │   └── index.tsx
│   ├── Projects
│   │   └── index.tsx
│   ├── Skills
│   │   └── index.tsx
│   ├── WeeklyCloneCoding
│   │   └── index.tsx
│   ├── WeeklyCommits
│   │   └── index.tsx
│   └── index.ts
├── hooks
│   └── calendar
│       └── useCalendar.ts
├── index.tsx
├── layouts
│   ├── Aside
│   │   └── index.tsx
│   ├── BaseLayout
│   │   └── index.tsx
│   ├── Footer
│   │   └── index.tsx
│   ├── Header
│   │   └── index.tsx
│   └── index.ts
├── pages
│   └── Home
│       ├── components
│       │   ├── OverviewPanel
│       │   │   ├── index.tsx
│       │   │   └── types.ts
│       │   ├── StudyPanel
│       │   │   ├── index.tsx
│       │   │   └── types.ts
│       │   ├── TabItemsList
│       │   │   ├── index.tsx
│       │   │   └── types.ts
│       │   └── index.ts
│       └── index.tsx
├── react-app-env.d.ts
├── routes
│   └── index.tsx
├── styles
│   └── index.css
└── utils
    └── index.ts
```

## NPM Packages

-   React v18 + TypeScript
-   react-router-dom v6

-   Icon

    -   @fortawesome/fontawesome-svg-core
    -   @fortawesome/free-regular-svg-icons
    -   @fortawesome/free-solid-svg-icons
    -   @fortawesome/react-fontawesome

-   Graph

    -   d3

-   tailwindcss

## Code Convention

-   ESLint - AirBnB
-   Prettier

## References

## D3.JS

-   https://d3-graph-gallery.com/graph/area_lineDot.html
-   https://d3-graph-gallery.com/graph/donut_basic.html
-   https://d3-graph-gallery.com/graph/connectedscatter_tooltip.html

### Web Accessibility

-   https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/
-   https://www.w3.org/WAI/ARIA/apg/patterns/menubutton/

### Resources

-   Photo by <a href="https://unsplash.com/@andriyko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andriyko Podilnyk</a> on <a href="https://unsplash.com/s/photos/rabbit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
