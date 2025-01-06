export type AppConfig = {
    apiPrefix: string
    authenticatedEntryPath: string
    unAuthenticatedEntryPath: string
    tourPath: string

}

const appConfig: AppConfig = {
    apiPrefix: 'http://localhost:4000/api/v1',
    authenticatedEntryPath: '/home',
    unAuthenticatedEntryPath: '/sign-in',
    tourPath: '/',
}

export default appConfig