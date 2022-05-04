export interface User{
  id: string
  username: string
  name: string
  last_name: string
  id_type: string
  birthdate: Date
  email: string
  created_at: string
  updated_at: string
}

export interface UserForm extends Omit<User, 'created_at' | 'updated_at'>{
  password: string
}
