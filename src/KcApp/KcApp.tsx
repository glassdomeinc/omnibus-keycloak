import './KcApp.css'
import { lazy, Suspense } from 'react'
import type { KcContext } from './kcContext'
import KcAppBase, { defaultKcProps } from 'keycloakify'
import { useI18n } from './i18n'

const RegisterUserProfile = lazy(() => import('./RegisterUserProfile'))
const Terms = lazy(() => import('./Terms'))

export type Props = {
  kcContext: KcContext
}

export default function KcApp({ kcContext }: Props) {
  const i18n = useI18n({ kcContext })

  //NOTE: Locales not yet downloaded
  if (i18n === null) {
    return null
  }

  const props = {
    i18n,
    ...defaultKcProps,
  }

  return (
    <Suspense>
      {(() => {
        switch (kcContext.pageId) {
          case 'register-user-profile.ftl':
            return <RegisterUserProfile {...{ kcContext, ...props }} />
          case 'terms.ftl':
            return <Terms {...{ kcContext, ...props }} />
          default:
            return <KcAppBase {...{ kcContext, ...props }} />
        }
      })()}
    </Suspense>
  )
}
