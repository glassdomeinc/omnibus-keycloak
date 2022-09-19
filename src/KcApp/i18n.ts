import { useI18n as useI18nBase } from 'keycloakify'

type Props = Omit<Parameters<typeof useI18nBase>[0], 'extraMessages'>

export function useI18n(props: Props) {
  const { kcContext } = props
  return useI18nBase({
    kcContext,
    extraMessages: {
      en: {
        alphanumericalCharsOnly: 'Only alphanumerical characters',
        gender: 'Gender',
        // Here we overwrite the default english value for the message "doForgotPassword"
        // that is "Forgot Password?" see: https://github.com/InseeFrLab/keycloakify/blob/f0ae5ea908e0aa42391af323b6d5e2fd371af851/src/lib/i18n/generated_messages/18.0.1/login/en.ts#L17
        doForgotPassword: 'I forgot my password',
      },
      ko: {
        /* spell-checker: disable */
        alphanumericalCharsOnly: '영문자/숫자만 사용할 수 있습니다.',
        gender: '성별',
        doForgotPassword: '비밀번호 찾기',
        /* spell-checker: enable */
      },
    },
  })
}

export type I18n = NonNullable<ReturnType<typeof useI18n>>
