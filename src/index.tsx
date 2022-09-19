import { createRoot } from 'react-dom/client'
import { StrictMode, lazy, Suspense } from 'react'
import { kcContext } from './KcApp/kcContext'

const App = lazy(() => import('./App'))
const KcApp = lazy(() => import('./KcApp'))

if (kcContext !== undefined) {
  console.log(kcContext)
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense>{kcContext === undefined ? <App /> : <KcApp kcContext={kcContext} />}</Suspense>
  </StrictMode>
)
