export const systemMessages: {
  code: string
  title: string
  type: 'info' | 'success' | 'error'
  description: string
}[] = [
  {
    code: 'invalidLogin',
    title: 'Ошибка',
    description:
      'Имя пользователя или пароль введены неверно',
    type: 'error',
  },
]
