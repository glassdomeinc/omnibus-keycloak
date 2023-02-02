import { getKcContext } from 'keycloakify/lib/getKcContext'

export const { kcContext } = getKcContext<{
  // NOTE: register.ftl is deprecated in favor of register-user-profile.ftl
  // but let's say we use it anyway and have this plugin enabled: https://github.com/micedre/keycloak-mail-whitelisting
  // keycloak-mail-whitelisting define the non standard ftl global authorizedMailDomains, we declare it here.
  pageId: 'register-user-profile.ftl'
  authorizedMailDomains: string[]
}>({
  // Uncomment to test the login page for development.
  // Try with another page like "register-user-profile.ftl"
  // DON'T forget to re-comment before publishing to production.
  // You must run 'yarn keycloak' at least once before testing locally.
  mockPageId: 'register-user-profile.ftl',
  mockData: [
    {
      pageId: 'login.ftl',
      locale: {
        //When we test the login page we do it in french
        currentLanguageTag: 'en',
      },
    },
    {
      //NOTE: You will either use register.ftl (legacy) or register-user-profile.ftl, not both
      pageId: 'register-user-profile.ftl',
      realm: {
        internationalizationEnabled: true,
        registrationEmailAsUsername: true,
      },
      client: {},
      recaptchaRequired: true,
      locale: {
        currentLanguageTag: 'en',
        supported: [
          {
            label: '한국어',
            languageTag: 'kr',
          },
        ],
      },
      profile: {
        attributes: [
          {
            validators: {
              pattern: {
                pattern: '^[a-zA-Z0-9]+$',
                'ignore.empty.value': true,
                // eslint-disable-next-line no-template-curly-in-string
                'error-message': '${alphanumericalCharsOnly}',
              },
            },
            //NOTE: To override the default mock value
            value: undefined,
            name: 'username',
          },
        ],
      },
    },
  ],
})

export type KcContext = NonNullable<typeof kcContext>
