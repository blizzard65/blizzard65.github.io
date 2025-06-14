const supabase = SupabaseClient.createClient(
    'https://vpbiokohfyslgudzesot.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwYmlva29oZnlzbGd1ZHplc290Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4ODI2NDgsImV4cCI6MjA2NTQ1ODY0OH0.sQHNxJNnXe92QAf-yMmEJseWT1fblY0K3mC6NgbdwUw'
); 

async function init() {
    let { data: messages, error } = await supabase
  .from('messages')
  .select('*')

  console.log(messages);
}