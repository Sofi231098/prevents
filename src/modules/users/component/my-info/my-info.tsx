import { Button, Input } from '@/shared/components';
import { Textarea } from '@/shared/components/textarea/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useUserStore } from '../../store/user-store';
import styles from './my-info.module.css';
import { MyInfoSchema, schema } from './my-info.schema';
import { Save } from '@/assets/Icons';

export const MyInfo = () => {

    const { user, updateUser } = useUserStore();

    const {
        register,
        handleSubmit,
        watch, formState: { errors }
    } = useForm<MyInfoSchema>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: user?.name || '',
            email: user?.email || '',
            description: user?.description || ''
        }
    })

    const onSubmit = (data: MyInfoSchema) => {
        updateUser(data);
        toast.success('Información actualizada correctamente');
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles['form-field']}>
                    <label htmlFor="name">Nombre</label>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Ingresa tu nombre"
                        {...register('name')}
                        defaultValue={watch('name') || ''}
                        hasError={!!errors.name && errors.name.message !== undefined}

                    />
                    {errors.name && <span className={styles.error}>{errors.name.message}</span>}
                </div>
                <div className={styles['form-field']}>
                    <label htmlFor="email">
                        Correo electrónico
                    </label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Ingresa tu correo electrónico"
                        {...register('email')}
                        defaultValue={watch('email') || ''}
                        hasError={!!errors.email && errors.email.message !== undefined}
                    />
                    {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                </div>
                <div className={styles['form-field']}>
                    <label htmlFor="description">
                        Descripción
                    </label>
                    <Textarea
                        id="description"
                        placeholder="Añade una breve descripción sobre ti"
                        {...register('description')}
                        defaultValue={watch('description') || ''}
                        className={styles.textarea}
                        hasError={!!errors.description && errors.description.message !== undefined}
                    />
                    {errors.description && <span className={styles.error}>{errors.description.message}</span>}
                </div>
                <Button
                    Icon={<Save />}
                    variant="filled"
                    text='Guardar cambios'
                    type="submit"
                />
            </form >
        </>
    )
}
