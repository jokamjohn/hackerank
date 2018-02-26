def sos(message):
    message_sum = len(message)
    if message_sum % 3 is not 0:
        raise ValueError('Wrong message input')
    upper_case_message = message.upper()
    message_list = [upper_case_message[i: i + 3] for i in range(0, len(upper_case_message), 3)]
    altered_letters = 0
    for sos_signal in message_list:
        if not sos_signal == 'SOS':
            altered_letters += 1
    return altered_letters


print(sos('SOSSOSSOS'))
