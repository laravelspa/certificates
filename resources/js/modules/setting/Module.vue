<template>
    <q-page class="q-pa-lg">
        <Suspense>
            <template #default>
                <RouterView />
            </template>
        </Suspense>
    </q-page>
</template>
