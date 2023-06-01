import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load = (async ({ locals: { supabase, getSession } }) => {
  const session = await getSession()

  console.log("Loading trips");
  

  if (!session) {
    throw redirect(303, '/')
  }

  const { data: trips } = await supabase
    .from('trips')
    .select(`destination, description`)

  return { session, trips }
}) satisfies PageServerLoad

