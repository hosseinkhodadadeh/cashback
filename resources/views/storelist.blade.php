<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Choose your store!</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 min-h-screen flex flex-col items-center py-10">

    <h1 class="text-3xl font-semibold text-gray-800 mb-8">Choose your store!</h1>

    <div class="w-full max-w-md bg-white rounded-2xl shadow-md p-4 divide-y divide-gray-200">
     


@foreach ($stores as $store)
    <div class="flex items-center py-3 hover:bg-gray-100 transition rounded-xl px-3">
        <img 
            src="{{ $store['icon'] }}" 
            alt="{{ $store['name'] }} logo" 
            class="w-10 h-10 rounded-full mr-4 border border-gray-200"
        >
        <span class="text-lg text-gray-700 font-medium">{{ $store['name'] }}</span>
    </div>
@endforeach
            
       
    </div>

</body>
</html>
