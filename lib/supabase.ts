// src/lib/supabase.ts

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zxwgjyekjmhmfwmngqgl.supabase.co'
const supabaseAnonKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4d2dqeWVram1obWZ3bW5ncWdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0MDc0NjIsImV4cCI6MjA0MTk4MzQ2Mn0.3kbV1GDlfeRmLrCv_fe7sbpqA-iOwBLwq-n0DvjqDs0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
