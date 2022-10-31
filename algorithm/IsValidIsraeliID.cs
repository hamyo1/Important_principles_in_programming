//validate israel id in c#

bool IsValidIsraeliID(string id)
{

    id = id.Trim();
    if (id.Length > 9 || id.Length < 5 || !double.TryParse(id, out double idN)) return false;

    // Pad string with zeros up to 9 digits
    id = id.Length < 9 ? ("00000000" + id).Substring(("00000000" + id).Length - 9) : id;
    int sumDigits = 0;

    for (int i = 0; i < 9; i++)
    {
        if ((i + 1) % 2 == 0)
        {
            sumDigits = int.Parse(id[i].ToString()) * 2 > 9 ?
                sumDigits + ((int.Parse(id[i].ToString()) * 2) % 10) + 1 : sumDigits + int.Parse(id[i].ToString()) * 2;
        }
        else
        {
            sumDigits = sumDigits + int.Parse(id[i].ToString());
        }
    }
    return !((sumDigits % 10) > 0);
}