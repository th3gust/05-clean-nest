import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModel } from './auth/auth.module'
import { envSchema } from './env/env'
import { HttpModule } from './http/http.module'
import { EnvService } from './env/env.service'
import { EnvModule } from './env/env.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModel,
    HttpModule,
    EnvModule,
  ],
  providers: [EnvService],
})
export class AppModule {}
